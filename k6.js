import http from 'k6/http';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export function handleSummary(data) {
    return {
        "summary.html": htmlReport(data),
    };
}

export let options = {
    stages: [
        { duration: '1m', target: __ENV.TARGET_VUS_MIN  },  
        { duration: '2m', target: __ENV.TARGET_VUS_MAX  }, 
        { duration: '1m', target: 0 },    
    ],
};

export default function () {
    const URL = __ENV.URL; 
    http.get(URL);
}

