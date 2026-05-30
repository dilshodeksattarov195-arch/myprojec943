const cartDarseConfig = { serverId: 5168, active: true };

const cartDarseHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_5168() {
    return cartDarseConfig.active ? "OK" : "ERR";
}

console.log("Module cartDarse loaded successfully.");