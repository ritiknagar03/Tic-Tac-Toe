var box1 = document.getElementById('box1');
        var box2 = document.getElementById('box2');
        var box3 = document.getElementById('box3');
        var box4 = document.getElementById('box4');
        var box5 = document.getElementById('box5');
        var box6 = document.getElementById('box6');
        var box7 = document.getElementById('box7');
        var box8 = document.getElementById('box8');
        var box9 = document.getElementById('box9');
        var messageBox = document.getElementById('message');

        var chance = 'X';
        var message = '';

        messageBox.innerHTML = message;

        function changeChance(){
            if(chance === 'X'){
                chance = 'O';
            }else{
                chance = 'X';
            }
        }
        

        function checkWinner(){
            if((box1.innerText === box2.innerHTML && box1.innerText === box3.innerHTML) && box1.innerText != ''){
                messageBox.style.border = '1px solid black';
                messageBox.style.backgroundColor = 'rgba(48, 200, 48, 0.645)';
                messageBox.style.boxShadow = '0px 0px 5px 3px rgba(224,206,224,1)';
                if(box1.innerText === 'X'){
                    message = 'X is the winner';
                    messageBox.innerHTML = message;
                }else{
                    message = 'O is the winner';
                    messageBox.innerHTML = message;
                }
            }
            else if((box1.innerText === box4.innerHTML && box1.innerText === box7.innerHTML) && box1.innerText != ''){
                messageBox.style.border = '1px solid black';
                messageBox.style.backgroundColor = 'rgba(48, 200, 48, 0.645)';
                messageBox.style.boxShadow= 'rgba(181, 178, 181, 0.551)';
                if(box1.innerText === 'X'){
                    message = 'X is the winner';
                    messageBox.innerHTML = message;
                }else{
                    message = 'O is the winner';
                    messageBox.innerHTML = message;
                }
            }
            else if((box1.innerText === box5.innerHTML && box1.innerText === box9.innerHTML) && box1.innerText != ''){
                messageBox.style.border = '1px solid black';
                messageBox.style.backgroundColor = 'rgba(48, 200, 48, 0.645)';
                messageBox.style.boxShadow = '0px 0px 5px 3px rgba(181, 178, 181, 0.551)';
                if(box1.innerText === 'X'){
                    message = 'X is the winner';
                    messageBox.innerHTML = message;
                }else{
                    message = 'O is the winner';
                    messageBox.innerHTML = message;
                }
            }
            else if((box4.innerText === box5.innerHTML && box4.innerText === box6.innerHTML) && box4.innerText != ''){
                messageBox.style.border = '1px solid black';
                messageBox.style.backgroundColor = 'rgba(48, 200, 48, 0.645)';
                messageBox.style.boxShadow = '0px 0px 5px 3px rgba(181, 178, 181, 0.551)';
                if(box4.innerText === 'X'){
                    message = 'X is the winner';
                    messageBox.innerHTML = message;
                }else{
                    message = 'O is the winner';
                    messageBox.innerHTML = message;
                }
            }
            else if((box7.innerText === box8.innerHTML && box7.innerText === box9.innerHTML) && box7.innerText != ''){
                messageBox.style.border = '1px solid black';
                messageBox.style.backgroundColor = 'rgba(48, 200, 48, 0.645)';
                messageBox.style.boxShadow = '0px 0px 5px 3px rgba(181, 178, 181, 0.551)';
                if(box7.innerText === 'X'){
                    message = 'X is the winner';
                    messageBox.innerHTML = message;
                }else{
                    message = 'O is the winner';
                    messageBox.innerHTML = message;
                }
            }
            else if((box2.innerText === box5.innerHTML && box2.innerText === box8.innerHTML) && box2.innerText != ''){
                messageBox.style.border = '1px solid black';
                messageBox.style.backgroundColor = 'rgba(48, 200, 48, 0.645)';
                messageBox.style.boxShadow = '0px 0px 5px 3px rgba(181, 178, 181, 0.551)';
                if(box2.innerText === 'X'){
                    message = 'X is the winner';
                    messageBox.innerHTML = message;
                }else{
                    message = 'O is the winner';
                    messageBox.innerHTML = message;
                }
            }
            else if((box3.innerText === box6.innerHTML && box3.innerText === box9.innerHTML) && box3.innerText != ''){
                messageBox.style.border = '1px solid black';
                messageBox.style.backgroundColor = 'rgba(48, 200, 48, 0.645)';
                messageBox.style.boxShadow = '0px 0px 5px 3px rgba(181, 178, 181, 0.551)';
                if(box3.innerText === 'X'){
                    message = 'X is the winner';
                    messageBox.innerHTML = message;
                }else{
                    message = 'O is the winner';
                    messageBox.innerHTML = message;
                }
            }
            else if((box3.innerText === box5.innerHTML && box3.innerText === box7.innerHTML) && box3.innerText != ''){
                messageBox.style.border = '1px solid black';
                messageBox.style.backgroundColor = 'rgba(48, 200, 48, 0.645)';
                messageBox.style.boxShadow = '0px 0px 5px 3px rgba(181, 178, 181, 0.551)';
                if(box3.innerText === 'X'){
                    message = 'X is the winner';
                    messageBox.innerHTML = message;
                }else{
                    message = 'O is the winner';
                    messageBox.innerHTML = message;
                }
            }
        }

        function checkDraw(){
            if(box1.innerHTML && box2.innerHTML && box3.innerHTML && box4.innerHTML && box5.innerHTML && box6.innerHTML && box7.innerHTML && box8.innerHTML && box9.innerHTML != ''){
                messageBox.style.border = '1px solid black';
                messageBox.style.backgroundColor = 'rgba(141, 170, 145, 0.718)';
                messageBox.style.boxShadow = '0px 0px 5px 3px rgba(181, 178, 181, 0.551)';
                message = "It's a Draw";
                messageBox.innerHTML = message;
            }
        }

        box1.addEventListener('click', ()=>{
            box1.innerHTML = chance;
            checkWinner();
            checkDraw();
            changeChance();
        })
        box2.addEventListener('click', ()=>{
            box2.innerHTML = chance;
            checkWinner();
            checkDraw();
            changeChance();
        })
        box3.addEventListener('click', ()=>{
            box3.innerHTML = chance;
            checkWinner();
            checkDraw();
            changeChance();
        })

        box4.addEventListener('click', ()=>{
            box4.innerHTML = chance;
            checkWinner();
            checkDraw();
            changeChance();
        })
        box5.addEventListener('click', ()=>{
            box5.innerHTML = chance;
            checkWinner();
            checkDraw();
            changeChance();
        })
        box6.addEventListener('click', ()=>{
            box6.innerHTML = chance;
            checkWinner();
            checkDraw();
            changeChance();
        })
        box7.addEventListener('click', ()=>{
            box7.innerHTML = chance;
            checkWinner();
            checkDraw();
            changeChance();
        })
        box8.addEventListener('click', ()=>{
            box8.innerHTML = chance;
            checkWinner();
            checkDraw();
            changeChance();
        })
        box9.addEventListener('click', ()=>{
            box9.innerHTML = chance;
            checkWinner();
            checkDraw();
            changeChance();
        })