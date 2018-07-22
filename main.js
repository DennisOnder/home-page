document.getElementById('todoInput').addEventListener('keyup', addTodo);
document.getElementById('nameInput').addEventListener('keyup', addName);
document.getElementById('cog').addEventListener('click', turnCog);
document.getElementById('cog').addEventListener('click', showMenu);
document.getElementById('searchInput').addEventListener('keyup', search);
document.getElementById('buttonMenuButton').addEventListener('click', showButtonMenu);
document.getElementById('menuButton').addEventListener('click', function() {
    changeName();
    turnCog();
});
document.getElementById('menuButton1').addEventListener('click', function() {
    removeTodo();
    turnCog();
});
document.getElementById('closeMenu').addEventListener('click', function() {
    showMenu();
    turnCog();
});

function showButtonMenu() {
    document.getElementById('buttonMenuColumn').classList.toggle('button-hide');
}

function search(e) {
    if (e.keyCode === 13 || e.which === 13) {
        var value = document.getElementById('searchInput').value;
        window.open('https://www.google.com/search?q=' + encodeURI(value));
        document.getElementById('searchInput').value = null;
    } else {
        return '';
    }
}

function changeName() {
    localStorage.removeItem('name');
    document.getElementById('nameOutput').style.display = 'none';
    document.getElementById('nameInput').style.display = 'block';
    showMenu();
}

function showMenu() {
    document.getElementById('menuId').classList.toggle('show-menu');
}

function turnCog() {
    document.getElementById('cog-wrapper').classList += 'rotate';
    setTimeout(function () {
        document.getElementById('cog-wrapper').classList.remove('rotate');
    }, 250)
}

function addName(e) {
    if (e.keyCode === 13 && e.which === 13) {
        var inputValue = document.getElementById('nameInput').value;
        var inputArray = [];
        inputArray.push(inputValue);
        localStorage.setItem('name', inputArray);
        checkName();
    } else {
        return '';
    }
}

function addTodo(e) {
    if (e.keyCode === 13 && e.which === 13) {
        var inputValue = document.getElementById('todoInput').value;
        var inputArray = [];
        inputArray.push(inputValue);
        localStorage.setItem('todo', inputArray);
        checkTodo();
    } else {
        return '';
    }
}

function checkName() {
    if (localStorage.getItem('name')) {
        var name = localStorage.getItem('name');
        document.getElementById('nameInput').style.display = 'none';
        document.getElementById('nameOutput').innerHTML = 'Hello, ' + name + '!';
        document.getElementById('nameOutput').style.display = 'block';
    } else {
        document.getElementById('nameInput').style.display = 'block';
        document.getElementById('nameOutput').style.display = 'none';
    }
}

function checkTodo() {
    if (localStorage.getItem('todo')) {
        var todo = localStorage.getItem('todo');
        document.getElementById('todoInput').style.display = 'none';
        document.getElementById('todoOutput').innerHTML = todo;
        document.getElementById('todoOutput').style.display = 'block';
        document.getElementById('delete').style.display = 'block';
        document.getElementById('delete').addEventListener('click', removeTodoNoCog)
    } else {
        document.getElementById('todoInput').style.display = 'block';
        document.getElementById('todoOutput').style.display = 'none';
    }
}

function removeTodo() {
    localStorage.removeItem('todo');
    document.getElementById('todoOutput').style.display = 'none';
    document.getElementById('todoInput').style.display = 'block';
    document.getElementById('delete').style.display = 'none';
    document.getElementById('todoInput').value = '';
    showMenu();
}

function removeTodoNoCog() {
    localStorage.removeItem('todo');
    document.getElementById('todoOutput').style.display = 'none';
    document.getElementById('todoInput').style.display = 'block';
    document.getElementById('delete').style.display = 'none';
    document.getElementById('todoInput').value = '';
}

function hideLoader() {
    setTimeout(function () {
        var wrapper = document.getElementById('wrapper');
        var loader = document.getElementById('spinner');
        var cog = document.getElementById('cog');
        var buttons = document.getElementById('buttons');
        var deleteButton = document.getElementById('delete');
        var menuButton = document.getElementById('buttonMenuButton');
        wrapper.style.display = 'block';
        loader.style.display = 'none';
        cog.style.visibility = 'visible';
        buttons.style.visibility = 'visible';
        deleteButton.style.visibility = 'visible';
        menuButton.style.display = 'block';
    }, 550)
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    h = checkTime(h);
    m = checkTime(m);
    document.getElementById('timeOutput').innerHTML =
        h + ":" + m;
    setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    };
    return i;
}