class ProductsController < ApplicationController
  before_action :set_product, only: [:show, :update, :destroy]

  # GET /products
  def index
    products = Product.find_by(user_id: params[:user_id])

    render json: products
  end

  # GET /products/1
  def show
    product = Product.find_by(id: params[:id])

    render json: product
  end

  # POST /products
  def create
    product = Product.new(product_params)

    if product.save
      render json: product, status: :created, location: product
    else
      render json: product.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /products/1
  def update
    if product.update(product_params)
      render json: product
    else
      render json: product.errors, status: :unprocessable_entity
    end
  end

  # DELETE /products/1
  def destroy
    product = Product.find_by(id: params[:id])
    product.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_product
      product = Product.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def product_params
      params.require(:product).permit(:name, :brand, :main_ingredient, :id, :user_id)
    end
end
