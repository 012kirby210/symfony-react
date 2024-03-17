function fetchJson(url,options){
    return fetch(url,
        Object.assign({credentials: 'same-origin'}, options)
    ).then( response => {
        if ( 204 !== response.status ) {
            return response.json();
        }
    })
}
export function getRepLogs() {
    return fetchJson('/reps').then(data =>data.items);
}

export function deleteRepLog(id){
    return fetchJson(`reps/${id}`,{method: 'DELETE'});
}

export function createRepLog(replog){
    return fetchJson('/reps',{
        method: 'POST',
        body: JSON.stringify(replog),
        headers: {
            'Content-Type': 'application/json',
        }
    });
}