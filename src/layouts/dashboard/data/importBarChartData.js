import React, { useEffect, useState } from "react";

function BarChartData() {

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                "https://farmmanager-api.herokuapp.com/api/income/"
            )
            const jsondata = await response.json();
            const newArray = [...jsondata];
            console.log(newArray);
        }
    });
}
     


