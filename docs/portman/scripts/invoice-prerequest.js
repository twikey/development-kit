var dateNow = new Date();
var twoWeeksFutureDate = new Date(new Date().setDate(dateNow.getDate() + 14));
pm.variables.set("invoiceNumber", '{{$randomInt}}{{$randomInt}}{{$randomInt}}');
pm.variables.set("invoiceDate", dateNow.toISOString().substr(0,10));
pm.variables.set("dueDate", twoWeeksFutureDate.toISOString().substr(0,10));
