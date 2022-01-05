const core = require('@actions/core');
const github = require('@actions/github');

type ImgurImage = {
  link: string;
  name: string;
};

interface Image {
  actual: ImgurImage;
  diff: ImgurImage;
  expected: ImgurImage;
}

try {
  const images: string = core.getInput('images');
  const imgArr: Image[] = JSON.parse(images);

  let str = '';
  if (Array.isArray(imgArr) && imgArr.length) {
    str += `<strong>visual testing</strong>

    | Actual | Diff | Expected |
    |:------:|:----:|:--------:|
    `;
    imgArr.forEach(({ actual, diff, expected }) => {
      str += `| ${actual.name} | ${diff.name} | ${expected.name} |
    | ![${actual.name}](${actual.link}) | ![${diff.name}](${diff.link}) | ![${expected.name}](${expected.link}) |`;
    });
    str += '\n\n';
    str = `
    <details>
    <p>
    ${str}
    </p>
    </details>
    `;

    const { owner, repo } = github.context.repo;
    github.rest.issues.createComment({
      owner: owner,
      repo: repo,
      issue_number: 1, // TODO: get issue number from context
      body: str,
    });
  }
} catch (error) {
  core.setFailed(error.message);
}
