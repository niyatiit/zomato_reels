const createFood = async (req, res) => {
  try {
    console.log(req.foodPartner)

    console.log(req.body)
    console.log(req.file)

    return res.json({
        success : true ,message : "Food items created"
    })
  } catch (error) {
    console.log("Create Food Error :- ", error);
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

export {createFood}