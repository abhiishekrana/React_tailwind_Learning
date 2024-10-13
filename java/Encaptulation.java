class Person{
    private String name;
    private int age;
    Person(String name,int age){
        this.name=name;
        this.age=age;
    }
    public void setName(String name){
        this.name=name;
    }
    public void setAge(int age){
        if(age>0){
            this.age=age;
        }else{
            System.out.println("age shouldn't be zero");
        }
    }

    public String getName(){
        return name;
    }
    public int getAge(){
        return age;
    }

    public static void main(String[] args) {
        Person p = new Person("Abhishek Rana",24);
        System.out.println(p.getName());
        System.out.println(p.getAge());

    }
}
