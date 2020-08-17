
const requireComponents = require.context('./modules/', true, /zh-CN.js/ )

let requireCom = {}
requireComponents.keys().forEach(fileName => {
    const reqCom = requireComponents(fileName)
    requireCom = Object.assign(requireCom,{
        ...reqCom.default
    })
})

export default requireCom