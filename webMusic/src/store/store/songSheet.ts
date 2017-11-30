/**
 * 精品歌单
 */
import { observable, computed, autorun } from "mobx"
import { Http, Cache } from "../../utils"
import formatTool from './formatTool';
export default class ObservableStore {
    // @observable Store = {};
    // 歌单
    @observable playlist = Cache.localGet("getPlaylist");
    // 详情
    @observable details = {};
    // 详情集合
    @observable detailsList = {};


    constructor() {
        // console.log(Help);
        this.getPlaylist();
    }
    // 获取歌单
    async getPlaylist() {
        if (!this.playlist) {
            this.playlist = await Http.get(`top/playlist`).map(x => formatTool.formatSongSheet(x.playlists, {
                id: "id",
                img: "coverImgUrl",
                name: "name"
            })).toPromise();
            Cache.localSet("getPlaylist", this.playlist);
        }
        return this.playlist;
    }
    async getDetails(id) {
        // playlist/detail?id=20320734
        this.details = {};
        const details = Cache.localGet(`detail?id=${id}`);
        if (!this.detailsList[id]) {
            if (details) {
                this.detailsList[id] = details;
            } else {
                this.detailsList[id] = await Http.get(`playlist/detail?id=${id}`).toPromise();
                Cache.localSet(`detail?id=${id}`, this.detailsList[id]);
            }
        }
        this.details = this.detailsList[id];
        return this.details;
    }
}



