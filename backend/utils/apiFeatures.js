//for selection, filteration and pagination purpose

class ApiFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  search() {
    const keyword = this.queryString.keyword
      ? {
          name: {
            $regex: this.queryString.keyword, //to search for a word in a string
            $options: "i", //to make it case insensitive
          },
        }
      : {};

    this.query = this.query.find({ ...keyword });
    return this;
  }

  filter() {
    const queryCopy = { ...this.queryString }; //to pass copy of value not reference

    //removing some fields for category

    const removeFields = ["keyword", "sort", "limit", "page"];

    removeFields.forEach((param) => delete queryCopy[param]);

    //filter for price and rating
    console.log(queryCopy, "i am queryCopy");

    let queryStr = JSON.stringify(queryCopy);

    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    console.log(queryStr, "i am queryStr");

    this.query = this.query.find(JSON.parse(queryStr));
    return this;
  }

  pagination(resultPerPage) {
    const currentPage = this.queryString.page || 1;

    const skip = resultPerPage * (currentPage - 1);

    this.query = this.query.skip(skip).limit(resultPerPage);

    return this;
  }
}

module.exports = ApiFeatures;
