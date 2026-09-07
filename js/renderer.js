function renderList(container,data,template){const el=typeof container==='string'?document.querySelector(container):container;if(el)el.innerHTML=data.map(template).join('')}
