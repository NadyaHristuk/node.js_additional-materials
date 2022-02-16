
Видео которое мне помогло докрутить HEROKU https://www.youtube.com/watch?v=e-3z-zfgWMY

export const getReportByMonthForSubcategories = async (req, res) => {
  const { _id } = req.user;
  console.log(_id);
  const id = _id.toString();
  const { date, category } = req.body;
  // date = '2022-02', category = "алкоголь"

  const categoryData = await Category.findOne({ category });
  const { alias, income } = categoryData;
  console.log(alias, income);

  const sortTransactionByMonthForSubcategories = [
    {
      $project: {
        reportPeriod: {
          $dateToString: {
            format: '%Y-%m',
            date: '$createdDate',
          },
        },
        category: 1,
        subcategory: 1,
        sum: 1,
        alias: 1,
        icon: 1,
        income: 1,
        owner: 1,
      },
    },
    {
      $match: {
        income: false,
        alias: alias,
        reportPeriod: date,
        owner: ObjectId(id),
      },
    },
    {
      $group: {
        _id: '$subcategory',
        totalSum: {
          $sum: '$sum',
        },
        count: {
          $sum: 1,
        },
      },
    },
    {
      $sort: {
        totalSum: -1,
      },
    },
  ];

export const getReportBySixMonth = async (req, res) => {
  const { _id } = req.user;
  const id = _id.toString();
  const { date } = req.body;
  // date = '2022-02'
  let { isIncome } = req.body;
  // isIncome = 'true' or 'false'

  if (isIncome === 'true') {
    isIncome = true;
  }
  if (isIncome === 'false') {
    isIncome = false;
  }

  const dateSixMonthAgo = new Date(
    new Date().getFullYear(),
    new Date().getMonth() - 6,
    new Date().getDate(),
  )
    .toISOString()
    .toString()
    .slice(0, 7)
    .split('-')
    .join('');

  console.log(dateSixMonthAgo);

  const sortTransactionBysixMonth = [
    {
      $match: {
        owner: ObjectId(id),
        income: isIncome,
      },
    },
    {
      $project: {
        reportPeriod: {
          $dateToString: {
            format: '%Y%m',
            date: '$createdDate',
          },
        },
        category: 1,
        subcategory: 1,
        sum: 1,
        alias: 1,
        icon: 1,
        income: 1,
        date: 1,
        owner: 1,
      },
    },
    {
      $addFields: {
        convertPeriod: {
          $toInt: '$reportPeriod',
        },
      },
    },
    {
      $match: {
        convertPeriod: {
          $gte: Number(dateSixMonthAgo),
        },
      },
    },
    {
      $group: {
        _id: '$date.month',
        totalSum: {
          $sum: '$sum',
        },
        year: {
          $first: '$convertPeriod',
        },
      },
    },
    {
      $sort: {
        year: 1,
      },
    },
  ];

  const result = await Transaction.aggregate([sortTransactionBysixMonth]);

https://github.com/SerheiYakimov/group10_node.js_project/blob/main/controllers/transactions/getReportBySixMonth.js
