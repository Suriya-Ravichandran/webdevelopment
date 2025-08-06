class Calcu {
    add(...nums) {
        console.log(nums)
        const sum = nums.reduce((acc, val) => acc + val, 0);
        console.log(sum);
    }
}

const cl = new Calcu();

cl.add(10, 30);       // Output: 40
cl.add(30, 50, 50);   // Output: 130
