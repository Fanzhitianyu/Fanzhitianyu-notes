# Numpy

>numpy是python的一个扩展库，是一个高效的科学计算库，包含各种运算,常用于处理矩阵等。  
>**官方文档：**[Numpy Documentation](https://numpy.org/doc/stable/reference/index.html#reference)

## 使用Numpy

Numpy的安装和导入：

```python
import numpy as np
print(np.version.full_version)
```

## 基础概念

1. ndarray的axis：  
    axis意味着层级
    - 0：0维，数组中最外层的维度
    - 1：1维，数组中的外层向内一层  
    - 2：2维，数组中的外层向内两层

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

NumPy数组的索引和切片操作提供了灵活的方式来访问和修改数组元素。主要包括以下几个方面：

1. 基础索引
    - 一维数组索引
    - 多维数组索引
    - 负数索引

    ```python
    # 一维数组索引
    arr = np.array([1, 2, 3, 4, 5])
    print(arr[0])     # 1
    print(arr[-1])    # 5

    # 多维数组索引
    arr_2d = np.array([[1, 2, 3], [4, 5, 6]])
    print(arr_2d[0, 1])  # 2
    print(arr_2d[1, -1]) # 6
    ```

2. 切片操作
    - 基本语法：[start:stop:step]
    - 多维数组切片
    - 省略号(...)的使用

    ```python
    # 一维切片
    arr = np.array([0, 1, 2, 3, 4, 5])
    print(arr[1:4])    # [1 2 3]
    print(arr[::2])    # [0 2 4]

    # 多维切片
    arr_2d = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
    print(arr_2d[0:2, 1:])  # [[2 3]
                            #  [5 6]]
    
    # 使用省略号
    arr_3d = np.array([[[1, 2], [3, 4]], [[5, 6], [7, 8]]])
    print(arr_3d[..., 0])  # [[1 3]
                           #  [5 7]]
    ```

3. 布尔索引
    - 条件筛选
    - 多条件组合
    - 布尔掩码

    ```python
    arr = np.array([1, 2, 3, 4, 5])
    
    # 条件筛选
    mask = arr > 3
    print(arr[mask])  # [4 5]
    
    # 多条件组合
    print(arr[(arr > 2) & (arr < 5)])  # [3 4]
    
    # 布尔掩码
    arr_2d = np.array([[1, 2], [3, 4]])
    mask_2d = arr_2d > 2
    print(arr_2d[mask_2d])  # [3 4]
    ```

4. 花式索引
    - 使用整数数组索引
    - 使用索引数组组合
    - 索引排序

    ```python
    arr = np.array([10, 20, 30, 40, 50])
    
    # 使用整数数组索引
    indices = [1, 3, 4]
    print(arr[indices])  # [20 40 50]
    
    # 使用索引数组组合
    arr_2d = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
    rows = np.array([0, 2])
    cols = np.array([0, 2])
    print(arr_2d[rows[:, np.newaxis], cols])  # [[1 3]
                                             #  [7 9]]
    
    # 索引排序
    arr = np.array([3, 1, 4, 1, 5, 9, 2, 6])
    sorted_indices = np.argsort(arr)
    print(arr[sorted_indices])  # [1 1 2 3 4 5 6 9]
    ```

## ufunc

>ufunc是NumPy中的一个核心概念，它提供了许多数学和统计函数，这些函数可以在NumPy数组上进行批量运算。

包含许多用于处理元素级运算的函数：

1. np.sqrt(arr)：计算ndarray的平方根。
2. np.exp(arr)：计算ndarray的指数。
3. np.log(arr)：计算ndarray的对数。
4. np.sin(arr)：计算ndarray的正弦值。
5. np.modf(arr): 拆分ndarray的元素的整数部分和小数部分，保存在一个元组中返回。  
等等......  

**注意：**  
ufunc可以接收一个out参数作为返回位置  
如果out为原函数，则直接在源数组上进行操作

`np.sqrt(arr, out=arr)`

## 通过数组对数据进行处理

>#32cb6c{矢量化}：用数组表达式代替循环的做法，通常被称为矢量化  
>*ps：这里只是举例，更多参考[官方文档](https://numpy.org/doc/stable/reference/index.html#reference)*

!>np.meshgrid需要重新理解，其解释似乎不全面  

1. 创建数组  
    `np.arange(-5, 5, 0.01)`| #3cadc1{创建一个-5到5之间，步长为0.01的等差数列}  
    `np.linspace(0, 2, 9)`| #3cadc1{创建一个从0到2之间，步长一致，元素总数为9的数列}  
    `np.random.random((5, 5))`| #3cadc1{创建一个5行5列的随机数}  
    `np.meshgrid(x, y, z)`| #3cadc1{创建一个网格，x和y为两个数组，x为行向y轴拓展，y为列向x轴拓展}   

2. 条件运算  
   `np.where(arr > 0, 1, 0)`| #3cadc1{将数组中大于0的元素替换为1，小于0的元素替换为0}  

3. 统计运算  
   `np.sum(arr)`| #3cadc1{求和}  
   `np.mean(arr)`| #3cadc1{平均值}  
   `np.std(arr)`| #3cadc1{标准差}  

4. 基于bool数组的运算  
    `(arr>0).sum()`| #3cadc1{对大于0的元素求和}  
    `bools.any()`| #3cadc1{bools为bool数组,如果有true则结果为true}  
    `bools.all()`| #3cadc1{bools为bool数组,如果有false则结果为false}  
    *ps: any()和all()函数可以用于非bool数组，非0元素为true*  
    `(arr>0).any()`| #3cadc1{如果有大于0的元素则返回true}

5. 排序  
    `arr.sort()`| #3cadc1{对数组进行排序}
    `arr.sort(1)`| #3cadc1{对数组进行排序，按行排序}

6. 集合运算  
   `np.unique(arr)`| #3cadc1{对数组进行去重，并返回已排序数组}  
   `np.intersect1d(arr1, arr2)`| #3cadc1{求两个数组的交集}  
   `np.union1d(arr1, arr2)`| #3cadc1{求两个数组的并集}  
   `np.setdiff1d(arr1, arr2)`| #3cadc1{求两个数组的差集}  
   `np.in1d(arr1, arr2)`| #3cadc1{判断arr1中的元素是否在arr2中}  
   `np.isin(arr1, arr2)`| #3cadc1{判断arr1中的元素是否在arr2中}  
   `np.in1d(arr1, arr2, invert=True)`| #3cadc1{判断arr1中的元素是否不在arr2中}  
   `np.isin(arr1, arr2, invert=True)`| #3cadc1{判断arr1中的元素是否不在arr2中}  

## 数组文件操作  

1. 保存文件  
    `np.save('arr.npy', arr)`| #3cadc1{保存数组到文件}  
    `np.savetxt('arr.txt', arr)`| #3cadc1{保存数组到文件，文本格式}  
    `np.savez('arr.npz', arr1=arr1, arr2=arr2)`| #3cadc1{保存多个数组到文件}  
    `np.savez_compressed('arr.npz', arr1=arr1, arr2=arr2)`| #3cadc1{保存多个数组到文件，压缩}  
2. 读取文件  
    `np.load('arr.npy')`| #3cadc1{读取数组文件}  
    `np.loadtxt('arr.txt')`| #3cadc1{读取数组文件，文本格式}  

## 其他

>numpy还支持矩阵运算，以及随机数生成等功能，建议直接查找官方文档。  
