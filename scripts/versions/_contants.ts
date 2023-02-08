import glob from "glob";

export const csharpPattern = /<PackageVersion>(?<version>.*)<\/PackageVersion>/;
export const csharpFiles = glob.sync(`**/*.csproj`);

export const pythonPattern = /version = "(?<version>.*)"/g;
export const pythonFiles = ["packages/python/pyproject.toml"];

export const jsPattern = /"version": "(?<version>.*)"/g;
export const jsFiles = ["package.json"];