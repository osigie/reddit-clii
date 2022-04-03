#! /usr/bin/env node

import open from "open";
import fetch from "node-fetch";
import yargs from "yargs";


const { argv } = yargs(process.argv);

const response = await fetch("https://reddit.com/.json");
const data = await response.json();

const randomIndex = Math.floor(Math.random() * data.data.children.length);
const randomPost = data.data.children[randomIndex];
const link = `https://reddit.com${randomPost.data.permalink}`;

if (argv.print) {
  console.log(
    `title: ${randomPost.data.title}
        link: ${link}`
  );
} else {
  open(link);
}
