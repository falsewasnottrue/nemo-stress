var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "1000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "424",
        "ok": "424",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "41082",
        "ok": "41082",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "12406",
        "ok": "12406",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "8383",
        "ok": "8383",
        "ko": "-"
    },
    "percentiles1": {
        "total": "10760",
        "ok": "10760",
        "ko": "-"
    },
    "percentiles2": {
        "total": "17623",
        "ok": "17623",
        "ko": "-"
    },
    "percentiles3": {
        "total": "28850",
        "ok": "28850",
        "ko": "-"
    },
    "percentiles4": {
        "total": "36428",
        "ok": "36428",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 3,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 4,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 993,
        "percentage": 99
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "6.849",
        "ok": "6.849",
        "ko": "-"
    }
},
contents: {
"req_request-10573": {
        type: "REQUEST",
        name: "request",
path: "request",
pathFormatted: "req_request-10573",
stats: {
    "name": "request",
    "numberOfRequests": {
        "total": "1000",
        "ok": "1000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "424",
        "ok": "424",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "41082",
        "ok": "41082",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "12406",
        "ok": "12406",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "8383",
        "ok": "8383",
        "ko": "-"
    },
    "percentiles1": {
        "total": "10760",
        "ok": "10760",
        "ko": "-"
    },
    "percentiles2": {
        "total": "17623",
        "ok": "17623",
        "ko": "-"
    },
    "percentiles3": {
        "total": "28850",
        "ok": "28850",
        "ko": "-"
    },
    "percentiles4": {
        "total": "36428",
        "ok": "36428",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 3,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 4,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 993,
        "percentage": 99
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "6.849",
        "ok": "6.849",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
