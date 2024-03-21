export default function getScoreColor(element, score) {
    element.classList.remove('text-yellow', 'text-green-score', 'text-blue-score', 'text-purple-score', 'text-pink-score', 'text-orange-score', 'text-white');
    if (score >= 250 && score < 2080) {
        element.classList.add('text-green-score');
    }
    else if (score >= 2080 && score < 2740) {
        element.classList.add('text-blue-score');
    }
    else if (score >= 2740 && score < 3355) {
        element.classList.add('text-purple-score');
    }
    else if (score >= 3355 && score < 3715) {
        element.classList.add('text-pink-score');
    }
    else if (score >= 3715) {
        element.classList.add('text-orange-score');
    }
    else {
        element.classList.add('text-white');
    }
}
