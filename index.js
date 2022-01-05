var core = require('@actions/core');
var github = require('@actions/github');
try {
    var images = core.getInput('images');
    var imgArr = JSON.parse(images);
    var str_1 = '';
    if (Array.isArray(imgArr) && imgArr.length) {
        str_1 += "<strong>visual testing</strong>\n\n    | Actual | Diff | Expected |\n    |:------:|:----:|:--------:|\n    ";
        imgArr.forEach(function (_a) {
            var actual = _a.actual, diff = _a.diff, expected = _a.expected;
            str_1 += "| " + actual.name + " | " + diff.name + " | " + expected.name + " |\n    | ![" + actual.name + "](" + actual.link + ") | ![" + diff.name + "](" + diff.link + ") | ![" + expected.name + "](" + expected.link + ") |";
        });
        str_1 += '\n\n';
        str_1 = "\n    <details>\n    <p>\n    " + str_1 + "\n    </p>\n    </details>\n    ";
        var _a = github.context.repo, owner = _a.owner, repo = _a.repo;
        console.log(owner, repo);
        github.rest.issues.createComment({
            owner: owner,
            repo: repo,
            issue_number: 1,
            body: str_1
        });
    }
}
catch (error) {
    core.setFailed(error.message);
}
