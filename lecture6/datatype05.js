var entry = {
    profile:{
        "name" : "희정",
        "job" : "Singer"
    }
};

var entry_str = JSON.stringify(entry);
var parsed = JSON.parse(entry_str)
var profile = parsed.profile

console.log('name', profile.name);
console.log('job', profile.job);
console.log('age', profile.age);
