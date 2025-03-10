# Numpy

>numpy是python的一个扩展库，用于快速处理数组，是python语言中处理数组和矩阵的利器。  

## 使用Numpy

Numpy的安装和导入：

```python
import numpy as np
print(np.version.full_version)
```

## ndarry的使用

ndarray是numpy的**基础数据类型**  
ndarray是一个**多维数组**  
ndarray的**维度是固定的**  
ndarray的**数据类型可以进行转换**  
ndarray的所有**数据类型必须一致**  

ndarray的创建：  

```python
np.array([1,2,3])
```

需要注意的是ndarray的是其子列表的维度必须一致  

```python
np.array([[1,3],[2,8]])
//good
np.array([[1,3,7],[2,8]])
//error!!
```

## ndarry运算

NumPy 的 ndarray 支持多种运算操作，主要包括：

1. 算术运算

    ```python
    # 基本运算
    a = np.array([1, 2, 3])
    b = np.array([4, 5, 6])

    # 加法
    print(a + b)  # [5 7 9]
    # 减法
    print(a - b)  # [-3 -3 -3]
    # 乘法
    print(a * b)  # [4 10 18]
    # 除法
    print(a / b)  # [0.25 0.4 0.5]
    # 幂运算
    print(a ** 2)  # [1 4 9]
    ```

2. 矩阵运算

    ```python
    # 矩阵乘法
    a = np.array([[1, 2], [3, 4]])
    b = np.array([[5, 6], [7, 8]])

    # 点积
    print(np.dot(a, b))  # [[19 22]
                         #  [43 50]]
    # 或使用 @
    print(a @ b)  # 同上

    # 转置
    print(a.T)  # [[1 3]
                #  [2 4]]
    ```

3. 统计运算

    ```python
    arr = np.array([[1, 2, 3], [4, 5, 6]])

    # 求和
    print(np.sum(arr))  # 21
    print(arr.sum(axis=0))  # 按列求和 [5 7 9]
    print(arr.sum(axis=1))  # 按行求和 [6 15]

    # 平均值
    print(np.mean(arr))  # 3.5

    # 最大值和最小值
    print(np.max(arr))  # 6
    print(np.min(arr))  # 1

    # 标准差
    print(np.std(arr))  # 1.707825127659933
    ```

4. 广播机制

    ```python
    # 数组与标量运算
    arr = np.array([1, 2, 3])
    print(arr + 2)  # [3 4 5]
    print(arr * 3)  # [3 6 9]

    # 不同形状数组的运算
    a = np.array([[1, 2, 3],
                  [4, 5, 6]])
    b = np.array([10, 20, 30])
    print(a + b)  # [[11 22 33]
                  #  [14 25 36]]
    ```

5. 逻辑运算

    ```python
    a = np.array([1, 2, 3, 4])
    b = np.array([4, 2, 2, 4])
    
    # 比较运算
    print(a == b)  # [False  True False  True]
    print(a > b)   # [False False  True False]
    
    # 逻辑函数
    print(np.all(a == b))  # False
    print(np.any(a == b))  # True
    
    # 条件筛选
    print(a[a > 2])  # [3 4]
    ```

## 索引和切片
