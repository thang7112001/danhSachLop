import { useState } from "react";

export default function SchoolManager() {
    const [classes, setClasses] = useState([
        { name: "12A01", teacher: "Cô Lan" },
        { name: "12A02", teacher: "Thầy Minh" },
    ]);

    const [students, setStudents] = useState([
        { name: "Vũ Đình Duy Anh", age: 17, className: "12A01", score: 8.0 },
        { name: "Phạm Quốc Anh", age: 17, className: "12A01", score: 8.2 },
        { name: "Trần Quỳnh Anh", age: 17, className: "12A01", score: 9.1 },
        { name: "Nguyễn Thục Anh", age: 17, className: "12A01", score: 8.3 },
        { name: "Võ Quốc Bảo", age: 17, className: "12A01", score: 7.5 },
        { name: "Đỗ Nghi Bình", age: 17, className: "12A01", score: 8.7 },
        { name: "Nguyễn Trí Dũng", age: 17, className: "12A01", score: 7.8 },
        { name: "Nguyễn Tiến Đạt", age: 17, className: "12A01", score: 7.9 },
        { name: "Lê Nguyễn Khánh Giao", age: 17, className: "12A01", score: 9.0 },
        { name: "Lê Trần Gia Huy", age: 17, className: "12A01", score: 8.1 },

        { name: "Lê Trần Thùy An", age: 17, className: "12A02", score: 9.0 },
        { name: "Ngô Hoàng Anh", age: 17, className: "12A02", score: 8.2 },
        { name: "Đinh Gia Bảo", age: 17, className: "12A02", score: 8.0 },
        { name: "Mai Minh Bảo", age: 17, className: "12A02", score: 7.6 },
        { name: "Trần Trọng Dũng", age: 17, className: "12A02", score: 7.9 },
        { name: "Nguyễn Ngọc Hân", age: 17, className: "12A02", score: 8.5 },
        { name: "Phạm Nhật Hoàng", age: 17, className: "12A02", score: 7.7 },
        { name: "Trần Sĩ Hoàng", age: 17, className: "12A02", score: 8.4 },
        { name: "Lê Văn Dương Huy", age: 17, className: "12A02", score: 8.1 },
        { name: "Tường Phan Lê Khiêm", age: 17, className: "12A02", score: 8.3 },
    ]);

    const [className, setClassName] = useState("");
    const [teacher, setTeacher] = useState("");
    const [editClassIndex, setEditClassIndex] = useState(null);

    const [studentName, setStudentName] = useState("");
    const [studentAge, setStudentAge] = useState("");
    const [studentClass, setStudentClass] = useState("");
    const [studentScore, setStudentScore] = useState("");
    const [editStudentIndex, setEditStudentIndex] = useState(null);

    function addOrEditClass() {
        if (!className || !teacher) return alert("Vui lòng nhập đầy đủ lớp và giáo viên");
        const newClass = { name: className, teacher };

        if (editClassIndex !== null) {
            const updated = [...classes];
            updated[editClassIndex] = newClass;
            setClasses(updated);
            setEditClassIndex(null);
        } else {
            setClasses([...classes, newClass]);
        }

        setClassName("");
        setTeacher("");
    }

    function editClass(index) {
        setClassName(classes[index].name);
        setTeacher(classes[index].teacher);
        setEditClassIndex(index);
    }

    function deleteClass(index) {
        setClasses(classes.filter((_, i) => i !== index));
    }

    function addOrEditStudent() {
        if (!studentName || !studentAge || !studentClass || !studentScore)
            return alert("Vui lòng nhập đầy đủ thông tin học sinh");

        const newStudent = {
            name: studentName,
            age: Number(studentAge),
            className: studentClass,
            score: Number(studentScore),
        };

        if (editStudentIndex !== null) {
            const updated = [...students];
            updated[editStudentIndex] = newStudent;
            setStudents(updated);
            setEditStudentIndex(null);
        } else {
            setStudents([...students, newStudent]);
        }

        setStudentName("");
        setStudentAge("");
        setStudentClass("");
        setStudentScore("");
    }

    function editStudent(index) {
        const s = students[index];
        setStudentName(s.name);
        setStudentAge(s.age);
        setStudentClass(s.className);
        setStudentScore(s.score);
        setEditStudentIndex(index);
    }

    function deleteStudent(index) {
        setStudents(students.filter((_, i) => i !== index));
    }

    return (
        <div style={{ padding: "20px" }}>
            <h2>📚 Quản lý lớp học</h2>
            <input
                placeholder="Tên lớp"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
            />
            <input
                placeholder="GVCN"
                value={teacher}
                onChange={(e) => setTeacher(e.target.value)}
            />
            <button onClick={addOrEditClass}>
                {editClassIndex !== null ? "Cập nhật lớp" : "Thêm lớp"}
            </button>

            <ul>
                {classes.map((cls, index) => (
                    <li key={index}>
                        {cls.name} - GVCN: {cls.teacher}
                        <button onClick={() => editClass(index)}>Sửa</button>
                        <button onClick={() => deleteClass(index)}>Xóa</button>
                    </li>
                ))}
            </ul>

            <hr />

            <h2>👨‍🎓 Quản lý học sinh</h2>
            <input
                placeholder="Tên học sinh"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Tuổi"
                value={studentAge}
                onChange={(e) => setStudentAge(e.target.value)}
            />
            <select
                value={studentClass}
                onChange={(e) => setStudentClass(e.target.value)}
            >
                <option value="">--Chọn lớp--</option>
                {classes.map((cls, index) => (
                    <option key={index} value={cls.name}>
                        {cls.name}
                    </option>
                ))}
            </select>
            <input
                type="number"
                placeholder="Điểm"
                value={studentScore}
                onChange={(e) => setStudentScore(e.target.value)}
            />
            <button onClick={addOrEditStudent}>
                {editStudentIndex !== null ? "Cập nhật HS" : "Thêm HS"}
            </button>

            <table border="1" cellPadding="5" style={{ borderCollapse: 'collapse', width: '100%', marginTop: 20 }}>
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên</th>
                    <th>Tuổi</th>
                    <th>Lớp</th>
                    <th>Điểm</th>
                    <th>Hành động</th>
                </tr>
                </thead>
                <tbody>
                {students.map((s, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{s.name}</td>
                        <td>{s.age}</td>
                        <td>{s.className}</td>
                        <td>{s.score}</td>
                        <td>
                            <button onClick={() => editStudent(index)}>Sửa</button>{" "}
                            <button onClick={() => deleteStudent(index)}>Xóa</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
