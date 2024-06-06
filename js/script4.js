let size = 200; 

    function decreaseSize() {
        size -= 15; 
        document.getElementById('square').style.width = size + 'px';
        document.getElementById('square').style.height = size + 'px';
    }

    function increaseSize() {
        size += 15; 
        document.getElementById('square').style.width = size + 'px';
        document.getElementById('square').style.height = size + 'px';
    }