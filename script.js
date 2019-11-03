let input = `2
edinburgh
dublin
2 0`;

class TrieNode {
    constructor() {
        this.isLeaf = false;
        this.childrenCounter = 0;
        this.letters = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
        this.nodesCount = 1;
        this.wordsCount = 0;
    }

    insert(str) {
        var current = this.root;

        for (var i = 0; i < str.length; i++) {
            var index = str.charCodeAt(i) - 97;
            if (current.letters[index] == null) {
                current.letters[index] = new TrieNode();
                current.childrenCounter++;
                this.nodesCount++;
                current = current.letters[index];
            } else {
                current = current.letters[index];
            }
        }

        current.isLeaf = true;
        this.wordsCount++;
    }

    remove(str) {
        var current = this.root;
        var backTrack = [];

        for (var i = 0; i < str.length; i++) {
            var index = str.charCodeAt(i) - 97;
            backTrack.push(current);

            if (current.letters[index] == null) {
                return false;
            } else {
                current = current.letters[index];
            }
        }
        if (current.isLeaf) {
            this.wordsCount--;
        }
        current.isLeaf = false;
        backTrack.push(current);

        var lastRemoval = 0;
        for (var i = backTrack.length - 1; i > 0; i--) {
            var index = str.charCodeAt(i - 1) - 97;

            if (backTrack[i].childrenCounter == 0) {
                backTrack[i - 1].childrenCounter--;
                backTrack[i - 1].letters[index] = null;
                lastRemoval = i - 1;
                this.nodesCount--;
            } else {
                break;
            }
        }
    }

    lookup(str) {
        var current = this.root;

        for (var i = 0; i < str.length; i++) {
            var index = str.charCodeAt(i) - 97;
            if (current.letters[index] == null) {
                console.log(0);
                return false;
            } else {
                current = current.letters[index];
            }
        }

        if (current.isLeaf) {
            console.log(1);
            return true;
        }

        console.log(0);
        return false;
    }

    info() {
        console.log(this.nodesCount + " " + this.wordsCount);
    }

    alphabetical() {
        var arr = [];
        var tempWord = "";
        var result = this.getAlphabeticalWords(this.root, arr, tempWord, "");
        var resultString = "";
        for (var i = 0; i < result.length; i++) {
            console.log(result[i]);
        }
    }

    getAlphabeticalWords(node, arr, tempWord, letter, limit = -1) {
        var result;
        tempWord += letter;

        if (node.isLeaf) {
            arr.push(tempWord);
        }

        if ((node.childrenCounter > 0 && limit == -1) || (node.childrenCounter > 0 && limit != -1 && tempWord.length < limit)) {
            for (var i = 0; i < node.letters.length; i++) {
                if (node.letters[i] != null) {
                    result = this.getAlphabeticalWords(node.letters[i], arr, tempWord, String.fromCharCode(i + 97), limit);
                }
            }
        } else {
            result = arr;
        }

        return result;
    }

    autocomplete(prefix, k) {
        var current = this.root;

        for (var i = 0; i < prefix.length; i++) {
            var index = prefix.charCodeAt(i) - 97;
            if (current.letters[index] == null) {
                console.log("");
                return false;
            } else {
                current = current.letters[index];
            }
        }

        var arr = [];
        var tempWord = prefix;
        var result = [];
        if (k == -1) {
            result = this.getAlphabeticalWords(current, arr, tempWord, "");
        } else {
            var limit = k + prefix.length;
            result = this.getAlphabeticalWords(current, arr, tempWord, "", limit);
        }

        var resultString = "";
        for (var i = 0; i < result.length; i++) {
            resultString = resultString + result[i] + " ";
        }

        console.log(resultString);
    }
}


function processData(input) {
    var commands = input.split("\n");
    var trie = new Trie();

    for (var nItr = 1; nItr < commands.length; nItr++) {

        var cmd = commands[nItr].split(" ");

        switch (cmd[0]) {
            case "insert":
                {
                    trie.insert(cmd[1]);
                    break;
                }
            case "remove":
                {
                    trie.remove(cmd[1]);
                    break;
                }
            case "lookup":
                {
                    trie.lookup(cmd[1]);
                    break;
                }
            case "info":
                {
                    trie.info();
                    break;
                }
            case "alphabetical":
                {
                    trie.alphabetical();
                    break;
                }
            case "autocomplete":
                {
                    trie.autocomplete(cmd[1], Number(cmd[2]));
                    break;
                }
            default:
                {
                    break;
                }
        }
    }
}
















































function procesfsData(input) {
    var commands = input.split("\n");
    var trie = new Trie();

    for (var nItr = 1; nItr < commands.length; nItr++) {

        var cmd = commands[nItr].split(" ");

        switch (cmd[0]) {
            case "insert":
                {
                    trie.insert(cmd[1]);
                    break;
                }
            case "remove":
                {
                    trie.remove(cmd[1]);
                    break;
                }
            case "lookup":
                {
                    trie.lookup(cmd[1]);
                    break;
                }
            case "info":
                {
                    trie.info();
                    break;
                }
            case "alphabetical":
                {
                    trie.alphabetical();
                    break;
                }
            case "autocomplete":
                {
                    trie.autocomplete(cmd[1], Number(cmd[2]));
                    break;
                }
            default:
                {
                    break;
                }
        }
    }
}

processData(input);