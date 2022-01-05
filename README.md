# comment witch image action

This action comment pull request with playwright screenshot.

## Inputs

## `images`

**Required** The json string of the images array . Default `""`.

```js
  [{
    "actual":{
      "link":"https://i.imgur.com/n2ybzVe.png",
      "name":"homePage-actual"
    },
    "diff":{
      "link":"https://i.imgur.com/IfI6Pwi.png",
      "name":"homePage-diff"
    },
    "expected":{
      "link":"https://i.imgur.com/LURikMR.png",
      "name":"homePage-expected"
   }}]
```

## Example usage

```yml
uses: actions/hello-world-javascript-action@v1.1
with:
  images: ${{toJson(inputs.images)}}
```
