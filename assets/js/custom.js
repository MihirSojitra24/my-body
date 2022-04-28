// FOR CUSTOME NUMBER/quantity_design FIELD JS
jQuery('<div class="quantity_design-button quantity_design-up">+</div><div class="quantity_design-button quantity_design-down">-</div>').insertAfter('.quantity_design input');
jQuery('.quantity_design').each(function() {
    var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity_design-up'),
        btnDown = spinner.find('.quantity_design-down'),
        min = input.attr('min'),
        max = input.attr('max');

    btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
            var newVal = oldValue;
        } else {
            var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
    });

    btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
            var newVal = oldValue;
        } else {
            var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
    });

});


// FOR CUSTOME RANGE SLIDER JS
const
    range = document.getElementById('range'),
    tooltip = document.getElementById('tooltip'),
    setValue = () => {
        const
            newValue = Number((range.value - range.min) * 100 / (range.max - range.min)),
            newPosition = 16 - (newValue * 0.32);
        tooltip.innerHTML = `<span>${range.value} Times</span>`;
        tooltip.style.left = `calc(${newValue}% + (${newPosition}px))`;
        document.documentElement.style.setProperty("--range-progress", `calc(${newValue}% + (${newPosition}px))`);
    };
document.addEventListener("DOMContentLoaded", setValue);
range.addEventListener('input', setValue);