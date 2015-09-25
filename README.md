# npm-snapshot

A little script to help with prerelease `npm` modules. 

## Usage

You must use `npm-snapshot` in a folder with a `package.json`.

`npm-snapshot 245`

The argument to this utility is a unique, monotonically increasing number (say, a build number from Travis or Shippable)
that will be appended to the prerelease portion of the existing version. If there is no current prerelease portion of the 
version, the string 'SNAPSHOT' will be used. Any existing prerelease portion will be preserved, up to the first '.'.

For example, given the version "1.2.4", calling
  
`npm-snapshot 245`

will change the package.json to be "1.2.4-SNAPSHOT.245".

Additionally, the prerelease prefix is emitted on standard out. This is useful as a tag when publishing. For example:

```bash
BUILD_TAG = $(npm-snapshot $BUILD_NUMBER)
npm publish --tag BUILD_TAG
```

## Install

`npm install -g npm-snapshot`

## License

MIT