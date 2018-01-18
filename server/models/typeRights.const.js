
let defaultValue = [
// {name : 'Project', value: 'project', typeAccess:
//   [{value:'read',name:'Read'},{value:'write',name:'Write'},{value:'notification',name:'Get notification'}]},
{name : 'Home', value: 'home', typeAccess: [{value:'read',name:'Read'}]},
{name : 'Product', value: 'product', typeAccess:
  [{value:'read',name:'Read'},{value:'write', name:'Write'}]},
{name : 'Settings', value: 'settings', typeAccess: [{value:'read',name:'Read'}]},
{name : 'Quote', value: 'quote', typeAccess:
  [
    {value:'read',name:'Read'},
    {value:'write', name:'Write'},
    // {value:'notification', name:'Get notification'},
    {value:'signature', name:'Signature'},
    {value:'drawing', name:'Drawing'},
    // {value:'comment', name:'Comment'},
    {value:'template', name:'Template'},
  ]},
// {name : 'Reporting', value: 'reporting', typeAccess:
//   [{value:'read',name:'Read'},{value:'write', name:'Write'}]},
{name : 'Companie', value: 'companie', typeAccess:
  [{value:'read',name:'Read'},{value:'write',name:'Write'}]},
{name : 'User', value: 'user', typeAccess:
  [{value:'read',name:'Read'},{value:'write', name:'Write'}, {value:'create1',name:'Create1'}, {value:'readCross',name:'ReadCross'}]},
{name : 'Paiement', value: 'paiementQuote', typeAccess:
  [
    {value:'read',name:'Read'},
    {value:'write', name:'Write'}
  ]},
// {name : 'Task', value: 'task', typeAccess:
//   [{value:'read',name:'Read'},{value:'write', name:'Write'}]},
{name : 'userCalendar', value: 'userCalendar', typeAccess:
  [{value:'read',name:'Read'},{value:'write', name:'Write'}]},
// {name : 'Plan', value: 'plan', typeAccess:
//   [{value:'read',name:'Read'},{value:'write', name:'Write'}]},
{name : 'Right', value: 'right', typeAccess:
  [{value:'read',name:'Read'},{value:'write', name:'Write'}]},

// {name : 'Expense', value: 'expense', typeAccess:
//   [{value:'read',name:'Read'},{value:'write', name:'Write'}]},
// {name : 'Comment', value: 'comment', typeAccess:
//   [{value:'read',name:'Read'},{value:'write', name:'Write'}]},
]



let goldValue = [
{name : 'Home', value: 'home', typeAccess: [{value:'read',name:'Read'}]},
{name : 'Product', value: 'product', typeAccess:
  [{value:'read',name:'Read'},{value:'write', name:'Write'}]},
{name : 'Settings', value: 'settings', typeAccess: [{value:'read',name:'Read'}]},
{name : 'Quote', value: 'quote', typeAccess:
  [
    {value:'read',name:'Read'},
    {value:'write', name:'Write'},
    // {value:'notification', name:'Get notification'},
    {value:'signature', name:'Signature'},
    {value:'drawing', name:'Drawing'},
    // {value:'comment', name:'Comment'},
    {value:'template', name:'Template'},
  ]},
{name : 'Companie', value: 'companie', typeAccess:
  [{value:'read',name:'Read'},{value:'write',name:'Write'}]},
{name : 'User', value: 'user', typeAccess:
  [{value:'read',name:'Read'},{value:'write', name:'Write'},{value:'create5',name:'Create5'}, {value:'readCross',name:'ReadCross'}]},
{name : 'Paiement', value: 'paiementQuote', typeAccess:
  [
    {value:'read',name:'Read'},
    {value:'write', name:'Write'}
  ]},
// {name : 'Task', value: 'task', typeAccess:
//   [{value:'read',name:'Read'},{value:'write', name:'Write'}]},
{name : 'userCalendar', value: 'userCalendar', typeAccess:
  [{value:'read',name:'Read'},{value:'write', name:'Write'}]},
// {name : 'Plan', value: 'plan', typeAccess:
//   [{value:'read',name:'Read'},{value:'write', name:'Write'}]},
{name : 'Right', value: 'right', typeAccess:
  [{value:'read',name:'Read'},{value:'write', name:'Write'}]},

// {name : 'Expense', value: 'expense', typeAccess:
//   [{value:'read',name:'Read'},{value:'write', name:'Write'}]},
// {name : 'Comment', value: 'comment', typeAccess:
//   [{value:'read',name:'Read'},{value:'write', name:'Write'}]},
]



let externalUserRights = [
  {
    name : 'Quote', value: 'quote', typeAccess:
    [
      {value:'read', name: 'Read'},
    ]
  },
]

module.exports = {
  externalUserRights: externalUserRights,
  gold : goldValue,
  silver: defaultValue,
  default: defaultValue
}
