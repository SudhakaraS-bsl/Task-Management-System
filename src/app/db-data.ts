export const Tasks: any = [];

for (let i = 1; i <= 20; i++) {
    let category: string;
    let priority: string;
    let status: string;
    if (i % 2 == 0) { category = 'Category1'; priority = 'Low'; status = 'New'; }
    else { category = 'Category2'; priority = 'High'; status = "Completed"; }

    let obj = {
        "id": i,
        "name": "Name" + i,
        "categories": category,
        "priority": priority,
        "status": status
    };
    Tasks.push(obj);
}