var RequestType;
(function (RequestType) {
    RequestType["readData"] = "READ_DATA";
    RequestType["storeData"] = "STORE_DATA";
    RequestType["deleteData"] = "DELETE_DATA";
})(RequestType || (RequestType = {}));
console.log(RequestType.deleteData);
