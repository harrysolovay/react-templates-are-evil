import {join} from "path";

const [, , task] = process.argv;

void import(join(__dirname, task));
