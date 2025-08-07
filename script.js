let students = [
    {name: "山田太郎", furigana: "やまだたろう", birthdate: "2008-04-15", gender: "男", specialty: "Python"},
    {name: "佐藤花子", furigana: "さとうはなこ", birthdate: "2008-06-22", gender: "女", specialty: "Webデザイン"},
    {name: "鈴木一郎", furigana: "すずきいちろう", birthdate: "2008-09-03", gender: "男", specialty: "JavaScript"},
    {name: "高橋美咲", furigana: "たかはしみさき", birthdate: "2008-11-28", gender: "女", specialty: "データ分析"},
    {name: "田中健太", furigana: "たなかけんた", birthdate: "2009-01-10", gender: "男", specialty: "Java"},
    {name: "渡辺さくら", furigana: "わたなべさくら", birthdate: "2008-07-14", gender: "女", specialty: "React"},
    {name: "伊藤翔太", furigana: "いとうしょうた", birthdate: "2008-12-05", gender: "男", specialty: "機械学習"},
    {name: "山本愛美", furigana: "やまもとまなみ", birthdate: "2009-03-20", gender: "女", specialty: "CSS/HTML"},
    {name: "中村大輝", furigana: "なかむらだいき", birthdate: "2008-05-08", gender: "男", specialty: "データベース"},
    {name: "小林優奈", furigana: "こばやしゆうな", birthdate: "2008-10-17", gender: "女", specialty: "UI/UX"},
    {name: "加藤蓮", furigana: "かとうれん", birthdate: "2009-02-14", gender: "男", specialty: "PHP"},
    {name: "吉田真央", furigana: "よしだまお", birthdate: "2008-08-30", gender: "女", specialty: "Swift"},
    {name: "佐々木陽菜", furigana: "ささきひな", birthdate: "2008-04-25", gender: "女", specialty: "TypeScript"},
    {name: "山口航平", furigana: "やまぐちこうへい", birthdate: "2009-01-18", gender: "男", specialty: "C++"},
    {name: "松本莉子", furigana: "まつもとりこ", birthdate: "2008-06-11", gender: "女", specialty: "Python"},
    {name: "井上拓海", furigana: "いのうえたくみ", birthdate: "2008-11-02", gender: "男", specialty: "Node.js"},
    {name: "木村結衣", furigana: "きむらゆい", birthdate: "2008-09-19", gender: "女", specialty: "データ分析"},
    {name: "林慎太郎", furigana: "はやししんたろう", birthdate: "2009-03-07", gender: "男", specialty: "Ruby"},
    {name: "清水美月", furigana: "しみずみつき", birthdate: "2008-07-26", gender: "女", specialty: "Vue.js"},
    {name: "森田悠斗", furigana: "もりたゆうと", birthdate: "2008-12-13", gender: "男", specialty: "Go言語"},
    {name: "阿部千尋", furigana: "あべちひろ", birthdate: "2008-05-29", gender: "女", specialty: "機械学習"},
    {name: "藤田颯太", furigana: "ふじたそうた", birthdate: "2008-10-21", gender: "男", specialty: "Android開発"},
    {name: "岡田梨花", furigana: "おかだりか", birthdate: "2009-02-03", gender: "女", specialty: "JavaScript"},
    {name: "長谷川大和", furigana: "はせがわやまと", birthdate: "2008-08-15", gender: "男", specialty: "Python"},
    {name: "石田結菜", furigana: "いしだゆいな", birthdate: "2008-04-07", gender: "女", specialty: "Webデザイン"},
    {name: "近藤健人", furigana: "こんどうけんと", birthdate: "2008-11-25", gender: "男", specialty: "C#"},
    {name: "前田美優", furigana: "まえだみゆ", birthdate: "2009-01-30", gender: "女", specialty: "データベース"},
    {name: "横山陸斗", furigana: "よこやまりくと", birthdate: "2008-06-18", gender: "男", specialty: "React"},
    {name: "松田彩花", furigana: "まつだあやか", birthdate: "2008-09-11", gender: "女", specialty: "PHP"},
    {name: "福田翔", furigana: "ふくだしょう", birthdate: "2008-12-28", gender: "男", specialty: "TypeScript"},
    {name: "坂本愛理", furigana: "さかもとあいり", birthdate: "2008-07-09", gender: "女", specialty: "Swift"},
    {name: "西田大翔", furigana: "にしだひろと", birthdate: "2008-10-04", gender: "男", specialty: "Java"},
    {name: "東条桜", furigana: "とうじょうさくら", birthdate: "2009-03-15", gender: "女", specialty: "CSS/HTML"},
    {name: "北川蒼太", furigana: "きたがわそうた", birthdate: "2008-05-22", gender: "男", specialty: "機械学習"},
    {name: "南野美咲", furigana: "みなみのみさき", birthdate: "2008-08-07", gender: "女", specialty: "Node.js"},
    {name: "西村海斗", furigana: "にしむらかいと", birthdate: "2009-01-12", gender: "男", specialty: "データ分析"},
    {name: "上田優花", furigana: "うえだゆうか", birthdate: "2008-06-01", gender: "女", specialty: "Ruby"},
    {name: "川口真司", furigana: "かわぐちしんじ", birthdate: "2008-11-14", gender: "男", specialty: "Vue.js"},
    {name: "池田未来", furigana: "いけだみらい", birthdate: "2008-09-27", gender: "女", specialty: "Go言語"},
    {name: "原田陽向", furigana: "はらだひなた", birthdate: "2008-07-20", gender: "男", specialty: "Android開発"}
];

let currentFilter = 'all';
let currentSearchTerm = '';
let editingIndex = -1;

function calculateAge(birthdate) {
    const today = new Date();
    const birth = new Date(birthdate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    return age;
}

function renderTable() {
    const tbody = document.getElementById('tableBody');
    tbody.innerHTML = '';
    
    let filteredStudents = students.filter(student => {
        const matchesFilter = currentFilter === 'all' || student.gender === currentFilter;
        const matchesSearch = !currentSearchTerm || 
            student.name.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
            student.furigana.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
            student.specialty.toLowerCase().includes(currentSearchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
    });
    
    filteredStudents.forEach((student, index) => {
        const row = tbody.insertRow();
        const globalIndex = students.indexOf(student);
        row.innerHTML = `
            <td>${globalIndex + 1}</td>
            <td>${student.name}</td>
            <td>${student.furigana}</td>
            <td>${student.birthdate}</td>
            <td>${calculateAge(student.birthdate)}歳</td>
            <td><span class="gender-badge ${student.gender === '男' ? 'male' : 'female'}">${student.gender}</span></td>
            <td><span class="specialty-badge">${student.specialty}</span></td>
            <td>
                <button class="btn-edit" onclick="editStudent(${globalIndex})">編集</button>
                <button class="btn-delete" onclick="deleteStudent(${globalIndex})">削除</button>
            </td>
        `;
    });
    
    updateStats();
}

function updateStats() {
    const maleCount = students.filter(s => s.gender === '男').length;
    const femaleCount = students.filter(s => s.gender === '女').length;
    
    document.getElementById('totalStudents').textContent = students.length;
    document.getElementById('maleCount').textContent = maleCount;
    document.getElementById('femaleCount').textContent = femaleCount;
}

function editStudent(index) {
    editingIndex = index;
    const student = students[index];
    
    document.getElementById('modalTitle').textContent = '生徒情報を編集';
    document.getElementById('inputName').value = student.name;
    document.getElementById('inputFurigana').value = student.furigana;
    document.getElementById('inputBirthdate').value = student.birthdate;
    document.getElementById('inputGender').value = student.gender;
    document.getElementById('inputSpecialty').value = student.specialty;
    
    openModal();
}

function deleteStudent(index) {
    if (confirm(`${students[index].name}さんのデータを削除しますか？`)) {
        students.splice(index, 1);
        renderTable();
    }
}

function openModal() {
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('studentForm').reset();
    editingIndex = -1;
}

document.getElementById('searchInput').addEventListener('input', (e) => {
    currentSearchTerm = e.target.value;
    renderTable();
});

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderTable();
    });
});

document.getElementById('addStudent').addEventListener('click', () => {
    editingIndex = -1;
    document.getElementById('modalTitle').textContent = '新しい生徒を追加';
    document.getElementById('studentForm').reset();
    openModal();
});

document.querySelector('.close').addEventListener('click', closeModal);
document.getElementById('cancelBtn').addEventListener('click', closeModal);

document.getElementById('studentForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const studentData = {
        name: document.getElementById('inputName').value,
        furigana: document.getElementById('inputFurigana').value,
        birthdate: document.getElementById('inputBirthdate').value,
        gender: document.getElementById('inputGender').value,
        specialty: document.getElementById('inputSpecialty').value
    };
    
    if (editingIndex >= 0) {
        students[editingIndex] = studentData;
    } else {
        students.push(studentData);
    }
    
    renderTable();
    closeModal();
});

window.addEventListener('click', (e) => {
    if (e.target === document.getElementById('modal')) {
        closeModal();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    renderTable();
});