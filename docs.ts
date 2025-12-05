interface 文件信息 {
    dirName : string,
    displayName: string,
    displayInNav?:boolean,
    noSidebar?:boolean
}

let files : 文件信息[]= [
    {dirName:'gaming-guide', displayName:'游戏指南', displayInNav:true},
    {dirName:'mod-info', displayName:'模组信息', displayInNav: true},
    {dirName:'wiki-build-guide', displayName:'基建', displayInNav: true},
]

export default files