//BLOCK - SLIDER - WHO WE ARE
class Person {
    constructor(id, name, profession, src) {
        this.id = id;
        this.name = name;
        this.profession = profession;
        this.src = src;
    }
}

const persons = [
    {
        id: 'person__1',
        name: 'Tamara Bulic',
        profession: 'Project Manager',
        src: 'images/face-1.jpg'
    },
    {
        id: 'person__2',
        name: 'Robert All',
        profession: 'Programmer',
        src: 'images/face-2.jpg'
    },
    {
        id: 'person__3',
        name: 'Diana Bulic',
        profession: 'Project Manager',
        src: 'images/face-3.jpg'
    },
    {
        id: 'person__4',
        name: 'Tamara Bulic',
        profession: 'Designer',
        src: 'images/face-4.jpg'
    },
    {
        id: 'person__5',
        name: 'Tamara Bulic',
        profession: 'Project Manager',
        src: 'images/face-5.jpg'
    },
    {
        id: 'person__6',
        name: 'Team Lead',
        profession: 'Project Manager',
        src: 'images/face-6.jpg'
    },
    {
        id: 'person__7',
        name: 'Programmer',
        profession: 'Project Manager',
        src: 'images/face-7.jpg'
    },
    {
        id: 'person__8',
        name: 'Designer',
        profession: 'Project Manager',
        src: 'images/face-8.jpg'
    },
    {
        id: 'person__9',
        name: 'Tamara Bulic',
        profession: 'Project Manager',
        src: 'images/face-9jpg'
    },
    {
        id: 'person__10',
        name: 'Tamara Bulic',
        profession: 'Team Lead',
        src: 'images/face-10.jpg'
    },
    {
        id: 'person__11',
        name: 'Tamara Bulic',
        profession: 'Programmer',
        src: 'images/face-11.jpg'
    },
    {
        id: 'person__12',
        name: 'Tamara Bulic',
        profession: 'Project Manager',
        src: 'images/face-12.jpg'
    },
    {
        id: 'person__13',
        name: 'Tamara Bulic',
        profession: 'Designer',
        src: 'images/face-13.jpg'
    },{
        id: 'person__14',
        name: 'Tamara Bulic',
        profession: 'Team Lead',
        src: 'images/face-14.jpg'
    },

];




const $img = document.querySelectorAll('.item');
const $name = document.querySelector('.whoWeAre__name');
const $profession = document.querySelector('.whoWeAre__project');

for (let i = 0; i < persons.length ; i++){
        console.log( 'ok' );
        $img[i].addEventListener('click', function (e) {
            const imgItem = e.target;
            if($img[i].id ===  persons[i].id){
               $name.innerHTML = persons[i].name;
               $profession.innerHTML = persons[i].profession;
            }
        });
}