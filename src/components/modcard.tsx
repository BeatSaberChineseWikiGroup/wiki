import { useActiveDocContext, useDocById } from '@docusaurus/plugin-content-docs/client';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { CSSProperties } from 'react';

import { ModData } from '../mod_data';

import modDataGenerated from "@site/src/server/mod_data_generated"
import Link from '@docusaurus/Link';
import urls from '@site/urls';
function getPageName(){
        let pageName = undefined
    {
        let pgtmp = useActiveDocContext(undefined)?.activeDoc?.id
        if (pgtmp) {
            let tmp = pgtmp.split("/")
            if (tmp.length > 0) {
                pageName = tmp[tmp.length - 1]
            }
        }
    }
    return pageName
}


function renderMod(modData: ModData){
    let pageName = getPageName()

    let foots = []

    let isSelfPage = pageName != undefined && modData.modPage != undefined && pageName == modData.modPage
    let isNotSelfPage = pageName != undefined && modData.modPage != undefined && modData.modPage != pageName

    if(pageName != undefined && modData.name.toLowerCase() == pageName.toLowerCase()){
        isSelfPage = true
    }

    if(isNotSelfPage){
        foots.push(<div className="card__footer">
            <a href={useBaseUrl('docs/mod-info/'+modData.modPage)} className="button button--secondary button--block">转到介绍</a>
        </div>)
    }

    const cardStyle:CSSProperties = {
        margin: "16px"
    }

    if(isSelfPage){
        cardStyle.backgroundColor = 'var(--ifm-color-warning-lightest)'
        cardStyle.color = 'black'
    }

    return <div key={modData.name + modData.platform} style={{
        width: "360px",
        display: 'inline-block'
    }}>
        <div className={isSelfPage ? "card shadow--tl" : "card shadow--lw"} style={cardStyle}>
            <div className="card__header">
                <h3 style={{
                    textAlign: "center"
                }}>{modData.name}<sup style={{
                    transform: "scale(0.7)"
                }} className={modData.platform == 'pc' ? 'badge badge--success' : 'badge badge--info'}>{modData.platform == 'pc' ? 'PC' : 'Quest'}</sup></h3>
            </div>
            <div className="card__body">
                <p style={{textAlign:"right"}}>
                    作者：{modData.authors}
                </p>
                <p>
                    {modData.desc_zh ?? modData.desc_en }
                </p>
                <p style={{textAlign:'right'}}><a href={urls.edit_url + modData.editpath } >编辑</a></p>
            </div>
            {foots}
        </div>
    </div>

}

function 模组大卡({ 平台, 名称, platform, name }) {
    let p = platform || 平台;
    let n = name || 名称 || getPageName();

    let ret = []

    if(n == undefined){
        return <p>模组名称不能为空</p>
    }



    if(p == 'pc' || p == undefined){
        let data = modDataGenerated.pc[n.toLowerCase()]
        if(data != undefined){
            ret.push(renderMod(data))
        }
    }

    if(p == 'quest' || p == undefined){
        let data = modDataGenerated.quest[n.toLowerCase()]
        if(data != undefined){
            ret.push(renderMod(data))
        }
    }

    if(ret.length == 0){
        return <p>没有找到名为{n}的模组</p>
    }

    return <>{ret}</>

}

function renderSmallMod(modData:ModData){
    if(modData.modPage){
        return <Link href={'docs/mod-info/' + modData.modPage}>modData.name</Link>
    }else{
        return <span>modData.name</span>
    }
}

function 模组({ 平台, 名称, platform, name }) {
    let p = platform || 平台;
    let n = name || 名称 || getPageName();

    let ret = []

    if(n == undefined){
        return <p>模组名称不能为空</p>
    }

    if(p == 'pc' || p == undefined){
        let data = modDataGenerated.pc[n.toLowerCase()]
        if(data != undefined){
            ret.push(renderSmallMod(data))
        }
    }

    if(p == 'quest' || p == undefined){
        let data = modDataGenerated.quest[n.toLowerCase()]
        if(data != undefined){
            ret.push(renderSmallMod(data))
        }
    }

    if(ret.length == 0){
        return <span>{n}(无维基数据)</span>
    }
    return <>{ret}</>

}


export default {
    模组大卡,
    模组
}