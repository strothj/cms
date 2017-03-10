/* eslint-disable import/prefer-default-export */
export default {
  siteGet: (req, res) => {
    if (req.swagger.useStubs) {
      res.json({
        siteTitle: 'Awesome site',
      });
    }
  },
};
