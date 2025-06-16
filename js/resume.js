function enableDrag(id, titleId) {
  const el = document.getElementById(id);
  const title = document.getElementById(titleId);
  let isDragging = false, offsetX, offsetY;

  title.addEventListener('mousedown', (e) => {
    if (el.classList.contains('maximized')) return;
    isDragging = true;
    offsetX = e.clientX - el.offsetLeft;
    offsetY = e.clientY - el.offsetTop;
    el.style.transition = 'none';
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    el.style.transition = 'all 0.2s ease-in-out';
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    let newX = e.clientX - offsetX;
    let newY = e.clientY - offsetY;
    newX = Math.max(0, Math.min(newX, window.innerWidth - el.offsetWidth));
    newY = Math.max(0, Math.min(newY, window.innerHeight - el.offsetHeight));
    el.style.left = `${newX}px`;
    el.style.top = `${newY}px`;
  });
}

function closeWindow(id) {
  document.getElementById(id).style.display = 'none';
}

function openWindow(id) {
  const el = document.getElementById(id);
  el.style.display = 'block';
  el.classList.remove('minimized');
  el.classList.remove('maximized');
  el.focus();
}

function minimizeWindow(id) {
  document.getElementById(id).classList.add('minimized');
}

function maximizeWindow(id) {
  document.getElementById(id).classList.toggle('maximized');
}

function openFile(fileName) {
  const content = {
    'projects': "- style Terminal UI\n- Anime review blog\n- Font from handwriting (WIP)",
    'notes': "TODO:\n- Learn more php\n- wakaranai\n- Read Persian script history",
    'readme': "Welcome to sryeooo's folder!\nThis folder contains sample files for fun and design"
  };
  document.getElementById('fileContent').textContent = content[fileName] || 'File not found.';
  openWindow('fileViewer');
}

window.onload = () => {
  openWindow('resumeWindow');
  enableDrag('resumeWindow', 'titleBar');
  enableDrag('folderWindow', 'folderTitleBar');
  enableDrag('fileViewer', 'fileViewerTitle');
};
function FolderHome() {
  window.location.href = "../";
}


const webcam = document.getElementById('webcam');
let offsetX, offsetY, isDragging = false;
const originalLeft = webcam.offsetLeft;
const originalTop = webcam.offsetTop;

webcam.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.clientX - webcam.offsetLeft;
  offsetY = e.clientY - webcam.offsetTop;
});

document.addEventListener('mouseup', () => {
  if (isDragging) {
    isDragging = false;
    webcam.style.transition = 'all 0.3s ease';
    webcam.style.left = originalLeft + 'px';
    webcam.style.top = originalTop + 'px';
    setTimeout(() => webcam.style.transition = 'none', 300);
  }
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    let x = e.clientX - offsetX;
    let y = e.clientY - offsetY;
    webcam.style.left = x + 'px';
    webcam.style.top = y + 'px';
  }
});