import React from "react";

export default function Song( { data } ) {
    return (
        <tr className="music-row" onClick={() => console.log(data.title)}>
            <th> {data.title} </th>
            <th> {data.artist} </th>
        </tr>
    )
}