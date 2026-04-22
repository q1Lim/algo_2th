/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    const rows = mat.length;
    const cols = mat[0].length;
    
    const queue = [];
    const result = Array.from({ length: rows }, () => Array(cols).fill(-1));

    // 1. 0인 칸들을 모두 시작점으로 넣기
    for (let r = 0; r < rows; r++){
        for (let c = 0 ; c < cols; c++){
            if (mat[r][c] === 0){
                result[r][c] = 0;
                queue.push([r, c]);
            }
        }
    }

    // 2. 상하좌우방향 설정
    const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ];

    // 3. BFS로 돌리기
    while (queue.length){
        const [r, c] = queue.shift();

        for (let i = 0; i < directions.length; i++){
            const nr = r + directions[i][0];
            const nc = c + directions[i][1];

            if (nr < 0 || nr >= rows || nc < 0 || nc >= cols){
                continue;
            }

            if (result[nr][nc] === -1){
                result[nr][nc] = result[r][c] + 1;
                queue.push([nr, nc]);
            }
        }
    }
    return result;
};