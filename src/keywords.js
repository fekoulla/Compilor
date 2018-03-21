const keywords = {
    'console-object': { r: /(console)/, s: 'console' },
    'script-php-start': { r: /(<\?php)/, s: '<?php' },
    'script-end-php': { r: /(\?>)/, s: '?>' },
    'php-echo-command': { r: /(echo)/, s: 'echo' },
    'if-condition': { r: /(if)/, s: 'if' }
};

module.exports = keywords;