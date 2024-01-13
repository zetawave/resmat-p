const axios = require('axios')
const $ = require('cheerio');
const paths = require('../config/path.json')
const headers = 'headers'
const waterLines = 'waterLines'

/*
This method fetch headers of the SMAT Monitoring table
 */
function fetchHeaders (thead) {
    let count = 0
    let struct = {}
    thead.each((index, element) => {
        element.children.forEach((e, i) => {
            if (!struct[headers]) { struct[headers] = {} }
            if ($(e).text() !== '\n') {
                if (!struct[headers][count]) { struct[headers][count] = [] }
                $(e).children()
                    .each((i2, e2) => {
                        struct[headers][count].push($(e2).text())
                    })
                count += 1
            }
        })
    })

    return struct[headers]
}


// Fetch all SMAT data on the table
function fetchAllWaterParameters (tbody){
    let count = 0
    let struct = {}

    tbody.each((index, element) => {
        element.children.forEach((e, i) => {
            if (!struct[waterLines]) { struct[waterLines] = {} }
            if ($(e).text() !== '\n') {
                if (!struct[waterLines][count]) { struct[waterLines][count] = [] }
                $(e).children()
                    .each((i2, e2) => {
                        struct[waterLines][count].push($(e2).text())
                    })
                count += 1
            }
        })
    })

    return struct[waterLines]
}

// This method try to fetch the "thead" and "tbody" element of the main URL
export async function fetchUrl (listParse) {
    let globalStruct = {}
    try {
        const res = await axios({url:paths.base_url});
        const st = {
            thead: $('thead', res.data),
            tbody: $('tbody', res.data)
        };
        globalStruct[headers] = fetchHeaders(st.thead);
        globalStruct[waterLines] = fetchAllWaterParameters(st.tbody);
        return !listParse ? globalStruct : parseForListView(globalStruct);
    } catch (err) {
        //handle error
        console.log("ERROR ", err);
        return await Promise.reject(err);
    }
}

function parseForListView (gstruct){
    //TODO
    let items = []
    Object.keys(gstruct.waterLines).forEach((k, index)=>{
        let tempObj = {}
        let tempCommon = gstruct.waterLines[k]
        tempObj['id'] = tempCommon[0]
        tempObj['name'] = tempCommon[0]
        tempObj['parameters'] =  tempCommon.slice(1, tempCommon.length)
        tempObj['columns'] = gstruct.headers[0].slice(1, gstruct.headers[0].length)
        tempObj['salted'] = index * Math.floor(Math.random() * 1003929 )
        for (let i = 0; i<tempObj['parameters'].length; i++){
            tempObj['parameters'][i] = tempObj['parameters'][i]
            + " [ "
            + gstruct.headers[1][i+1]
            + " || "
            + gstruct.headers[2][i+1]
            +" ]"
        }
        items.push(tempObj)
    })
    return items
}