#How to contribute
####[Project description](https://github.com/Eskalol/StackSmashingDetected/blob/master/not_for_deploy/project.md)
####[Also check issue tracker for open issues](https://github.com/Eskalol/StackSmashingDetected/issues)

##Setup
```{r, engine='bash', count_lines}
$ git clone https://github.com/Eskalol/StackSmashingDetected
$ cd StackSmashingDetected
$ npm install
$ npm run serve
```

##Scripts
Build and bundle app into dist dircetory
```{r, engine='bash', count_lines}
$ npm run build
```

Serve app
```{r, engine='bash', count_lines}
$ npm run serve
```

Build bundle app into dist and serve from dist directory
```{r, engine='bash', count_lines}
$ npm run serve:dist
```

Test app and generate coverage report into coverage directory.
```{r, engine='bash', count_lines}
$ npm test
```
