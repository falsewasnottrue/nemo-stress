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
        "total": "443",
        "ok": "443",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "10593",
        "ok": "10593",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5051",
        "ok": "5051",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1832",
        "ok": "1832",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4948",
        "ok": "4948",
        "ko": "-"
    },
    "percentiles2": {
        "total": "6183",
        "ok": "6183",
        "ko": "-"
    },
    "percentiles3": {
        "total": "8252",
        "ok": "8252",
        "ko": "-"
    },
    "percentiles4": {
        "total": "9575",
        "ok": "9575",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 12,
        "percentage": 1
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 15,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 973,
        "percentage": 97
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "17.544",
        "ok": "17.544",
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
        "total": "443",
        "ok": "443",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "10593",
        "ok": "10593",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5051",
        "ok": "5051",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1832",
        "ok": "1832",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4948",
        "ok": "4948",
        "ko": "-"
    },
    "percentiles2": {
        "total": "6183",
        "ok": "6183",
        "ko": "-"
    },
    "percentiles3": {
        "total": "8252",
        "ok": "8252",
        "ko": "-"
    },
    "percentiles4": {
        "total": "9575",
        "ok": "9575",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 12,
        "percentage": 1
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 15,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 973,
        "percentage": 97
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "17.544",
        "ok": "17.544",
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
