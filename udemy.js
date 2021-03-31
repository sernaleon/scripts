greenColorSelector = '[class*="mc-quiz-answer--correct--"][class*="mc-quiz-answer--answer-body--"]';
labelSelector = '[class^="mc-quiz-answer--correctness--"]';
answerSelector = '[class^="mc-quiz-answer--answer-body--"]';
sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
hide = () => $(greenColorSelector).css("background-color","initial") | $(labelSelector).hide();
show = () => $(greenColorSelector).css("background-color","#e9f7f1");
s = async () => { show(); await sleep(500); hide();};
$(answerSelector ).click(s);
hide();
