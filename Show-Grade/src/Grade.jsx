export const calculateGrade = (marks) => {
    if (marks === undefined || marks === null || marks < 0) {
        return null; // Indicates invalid marks
    }
    if (marks >= 90 && marks <= 100) return 'A++';
    if (marks >= 80 && marks < 90) return 'A+';
    if (marks >= 70 && marks < 80) return 'A';
    if (marks >= 60 && marks < 70) return 'B';
    if (marks >= 50 && marks < 60) return 'C';
    return 'F';
};