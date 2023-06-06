const mergeButton = document.getElementById('mergeButton');
const startInput = document.getElementById('start');
const endInput = document.getElementById('end');
const timetable = document.getElementById('timetable');

mergeButton.addEventListener('click', function() {
  const startHour = parseInt(startInput.value);
  const endHour = parseInt(endInput.value);

  if (startHour >= endHour || startHour < 0 || endHour > 24) {
    alert('잘못된 입력입니다.');
    return;
  }

  const rows = timetable.rows;

  for (let i = startHour; i < endHour; i++) {
    const cells = rows[i].cells;
    const firstCell = cells[1];
    const lastCell = cells[5];

    if (firstCell.rowSpan === 1) {
      firstCell.rowSpan = endHour - startHour;
    }

    for (let j = 2; j <= 5; j++) {
      cells[j].style.display = 'none';
    }

    if (lastCell.rowSpan === 1) {
      lastCell.rowSpan = endHour - startHour;
    }
  }

  startInput.value = '';
  endInput.value = '';
});