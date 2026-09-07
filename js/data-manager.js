async function loadJSON(path){try{const r=await fetch(path);if(!r.ok)throw new Error(r.status);return await r.json()}catch(e){console.error('Data loading error',path,e);return []}}
