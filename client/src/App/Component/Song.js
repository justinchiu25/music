import React from "react";

export default function Song( { data } ) {
    return (
        <tr>
            <th> {data.title} </th>
            <th> {data.artist} </th>
        </tr>
    )
}