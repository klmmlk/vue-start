import Mock from 'mockjs'

const Random = Mock.Random
let itemsData = []
let itemLists = ['工商银行', '建设银行', '花旗银行']

function inc() {
    let List = []
    for (let ii = 0; ii < 7; ii++) {
        List.push(
            Mock.mock({
                name: Random.cname(),
                IDCard: Random.id(),
                homeAddress: Random.county(true)
            })
        )
    }
    return List
}
for (let i in itemLists) {
    itemsData.push(
        Mock.mock({
            itemName: itemLists[i],
            activate:true,
            data: inc()
        })
    )

}


export default {
    getItemsData: () => {
        return {
            code: 20000,
            data: {
                itemsData
            }
        }
    },
    getItemsList:()=>{
        return {
            code: 20000,
            data: {
                itemLists
            }
        }
    }
    
}
// console.log(itemsList);